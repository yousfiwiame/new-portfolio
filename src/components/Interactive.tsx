import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';

/**
 * GitHub Activity Component
 * 
 * To enable real GitHub activity display:
 * 1. Create a GitHub Personal Access Token at: https://github.com/settings/tokens
 * 2. Add it to your .env file as: VITE_GITHUB_TOKEN=your_token_here
 * 3. Required scopes: public_repo, read:user
 * 4. Restart your development server
 */

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Generate fallback contribution data when GitHub token is not available
const generateFallbackContributions = (): ContributionDay[] => {
  const contributions: ContributionDay[] = [];
  const today = new Date();
  
  // Generate 365 days of fallback data
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Random contribution levels for demo purposes
    const level = Math.floor(Math.random() * 5) as 0 | 1 | 2 | 3 | 4;
    const count = Math.floor(Math.random() * 10);
    
    contributions.push({
      date: date.toISOString().split('T')[0],
      count,
      level
    });
  }
  
  return contributions;
};

const Interactive = () => {
  const { t, language } = useLanguage();
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [monthLabels, setMonthLabels] = useState<string[]>([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!GITHUB_TOKEN) {
          // If no token, show a fallback contribution graph
          const fallbackContributions = generateFallbackContributions();
          setContributions(fallbackContributions);
          generateMonthLabels(fallbackContributions);
          
          // Set fallback repositories
          setRepos([
            {
              name: "portfolio",
              description: "My personal portfolio website built with React, TypeScript, and Tailwind CSS",
              language: "TypeScript",
              stars: 0,
              forks: 0,
              url: "https://github.com/yousfiwiame/portfolio",
              topics: ["react", "typescript", "tailwindcss", "portfolio"]
            },
            {
              name: "asteroid-watch",
              description: "Interactive space monitoring app for real-time asteroid tracking",
              language: "JavaScript",
              stars: 0,
              forks: 0,
              url: "https://github.com/yousfiwiame/asteroid-watch",
              topics: ["react", "nasa-api", "space", "monitoring"]
            }
          ]);
          
          setIsLoading(false);
          return;
        }
        
        // Fetch contributions
        const contributionsResponse = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `query {
              user(login: "yousfiwiame") {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      firstDay
                      contributionDays {
                        contributionCount
                        date
                        color
                      }
                    }
                  }
                }
              }
            }`
          })
        });

        if (!contributionsResponse.ok) {
          throw new Error('Failed to fetch GitHub contributions');
        }

        const contributionsData = await contributionsResponse.json();
        
        if (contributionsData.errors) {
          throw new Error(contributionsData.errors[0].message);
        }

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/yousfiwiame/repos?sort=updated&per_page=6', {
          headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
          }
        });

        if (!reposResponse.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }

        const reposData = await reposResponse.json();

        // Process contributions
        const calendar = contributionsData.data.user.contributionsCollection.contributionCalendar;
        const contributionDays: ContributionDay[] = [];

        const endDate = new Date();
        const startDate = new Date();
        startDate.setFullYear(endDate.getFullYear() - 1);
        startDate.setDate(startDate.getDate() + 1);
        
        const contributionMap = new Map<string, { count: number, level: 0 | 1 | 2 | 3 | 4 }>();
        
        calendar.weeks.forEach((week: any) => {
          week.contributionDays.forEach((day: any) => {
            const level: 0 | 1 | 2 | 3 | 4 = 
              day.color === '#ebedf0' ? 0 :
              day.color === '#9be9a8' ? 1 :
              day.color === '#40c463' ? 2 :
              day.color === '#30a14e' ? 3 : 4;

            contributionMap.set(day.date, { count: day.contributionCount, level });
          });
        });
        
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
          const dateString = currentDate.toISOString().split('T')[0];
          const contributionData = contributionMap.get(dateString);
          
          contributionDays.push({
            date: dateString,
            count: contributionData ? contributionData.count : 0,
            level: contributionData ? contributionData.level : 0
          });
          
          currentDate.setDate(currentDate.getDate() + 1);
        }

        // Process repositories
        const processedRepos: GitHubRepo[] = reposData.map((repo: any) => ({
          name: repo.name,
          description: repo.description || 'No description available',
          language: repo.language || 'Unknown',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          url: repo.html_url,
          topics: repo.topics || []
        }));

        setContributions(contributionDays);
        setRepos(processedRepos);
        
        generateMonthLabels(contributionDays);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const generateMonthLabels = (contributionData: ContributionDay[]) => {
    if (contributionData.length === 0) return;

    const sortedData = [...contributionData].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const firstDate = new Date(sortedData[0].date);
    const lastDate = new Date(sortedData[sortedData.length - 1].date);
    
    const totalWeeks = Math.ceil(sortedData.length / 7);
    const labels: string[] = [];
    const monthsToShow = Math.min(12, totalWeeks / 4);
    
    for (let i = 0; i < monthsToShow; i++) {
      const currentDate = new Date(firstDate);
      currentDate.setTime(
        firstDate.getTime() + 
        (i * (lastDate.getTime() - firstDate.getTime()) / (monthsToShow - 1))
      );
      labels.push(getMonth(currentDate.toISOString()));
    }

    setMonthLabels(labels);
  };

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-[#ebedf0] dark:bg-gray-900';
      case 1: return 'bg-[#9be9a8] dark:bg-[#0e4429]';
      case 2: return 'bg-[#40c463] dark:bg-[#006d32]';
      case 3: return 'bg-[#30a14e] dark:bg-[#26a641]';
      case 4: return 'bg-[#216e39] dark:bg-[#39d353]';
      default: return 'bg-[#ebedf0] dark:bg-gray-900';
    }
  };

  const getMonth = (date: string) => {
    const month = new Date(date).getMonth();
    return language === 'fr' 
      ? ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'][month]
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month];
  };

  return (
    <section id="interactive" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-center">
            {t("interactive.github.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Mon activité GitHub au cours de la dernière année'
              : 'My GitHub contribution activity over the past year'
            }
          </p>
          {!GITHUB_TOKEN && (
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-amber-800 dark:text-amber-200 text-sm">
                <strong>Note:</strong> This is a demo contribution graph. To see your real GitHub activity, 
                add <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">VITE_GITHUB_TOKEN</code> to your environment variables.
              </p>
            </div>
          )}
        </motion.div>

        {/* GitHub-style Contribution Graph */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto glass-card p-8 mb-16"
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lavender"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold mb-2">GitHub Activity Unavailable</h3>
                <p className="mb-3">{error}</p>
                <div className="text-sm">
                  <p className="mb-2">To enable GitHub activity display:</p>
                  <ol className="list-decimal list-inside space-y-1 text-left max-w-md mx-auto">
                    <li>Create a GitHub Personal Access Token</li>
                    <li>Add it to your .env file as VITE_GITHUB_TOKEN</li>
                    <li>Restart your development server</li>
                  </ol>
                </div>
              </div>
              <div className="text-muted-foreground">
                <p>This will show your real GitHub contribution graph and activity.</p>
              </div>
            </div>
          ) : contributions.length === 0 ? (
            <div className="text-center py-8">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">No GitHub Activity Found</h3>
                <p>No contribution data available for the selected time period.</p>
              </div>
            </div>
          ) : (
            <>
              {/* GitHub-style header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {contributions.reduce((sum, day) => sum + day.count, 0)} {language === 'fr' ? 'contributions cette année' : 'contributions in the last year'}
                </h3>
              </div>

              <div className="flex">
                {/* Days of week labels */}
                <div className="grid grid-rows-7 gap-[3px] mr-2 text-right text-xs text-gray-500">
                  {[
                    language === 'fr' ? 'Dim' : 'Sun',
                    language === 'fr' ? 'Lun' : 'Mon',
                    language === 'fr' ? 'Mar' : 'Tue',
                    language === 'fr' ? 'Mer' : 'Wed',
                    language === 'fr' ? 'Jeu' : 'Thu',
                    language === 'fr' ? 'Ven' : 'Fri',
                    language === 'fr' ? 'Sam' : 'Sat'
                  ].map((day, i) => (
                    <div key={i} className="h-[10px] leading-[10px] pr-2">{i % 2 === 0 ? '' : day}</div>
                  ))}
                </div>
                
                {/* Contribution grid */}
                <div className="w-full overflow-x-auto">
                  <div className="inline-flex">
                    {Array.from({ length: Math.ceil(contributions.length / 7) }).map((_, weekIndex) => {
                      const firstDayOfWeek = weekIndex * 7;
                      const contribution = contributions[firstDayOfWeek];
                      const nextWeekContribution = contributions[firstDayOfWeek + 7];
                      const isMonthBoundary = contribution && nextWeekContribution && 
                        new Date(contribution.date).getMonth() !== new Date(nextWeekContribution.date).getMonth();
                       
                      return (
                        <div 
                          key={weekIndex} 
                          className={`grid grid-rows-7 gap-[3px] mr-[3px] ${isMonthBoundary ? 'border-r border-gray-200 dark:border-gray-700 pr-1' : ''}`}
                        >
                          {Array.from({ length: 7 }).map((_, dayIndex) => {
                            const contributionIndex = weekIndex * 7 + dayIndex;
                            const contribution = contributionIndex < contributions.length ? 
                              contributions[contributionIndex] : null;
                            
                            return (
                              <div
                                key={dayIndex}
                                className={`w-[10px] h-[10px] ${
                                  contribution 
                                    ? getContributionColor(contribution.level) 
                                    : 'bg-[#ebedf0] dark:bg-gray-900'
                                } transition-colors duration-200 hover:ring-1 hover:ring-gray-400 dark:hover:ring-gray-600 rounded-sm`}
                                title={
                                  contribution 
                                    ? `${contribution.count} contributions on ${new Date(contribution.date).toLocaleDateString()}` 
                                    : 'No data'
                                }
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Month labels */}
              <div className="relative h-6 mt-2 ml-8 mr-4">
                {monthLabels.map((month, i) => {
                  const totalWeeks = Math.ceil(contributions.length / 7);
                  const weeksPerMonth = totalWeeks / monthLabels.length;
                  const position = (i * weeksPerMonth) / totalWeeks * 100;
                   
                  return (
                    <div 
                      key={i} 
                      className="absolute text-xs text-gray-500"
                      style={{ 
                        left: `${position}%`,
                        transform: i === 0 ? 'translateX(0)' : i === monthLabels.length - 1 ? 'translateX(-100%)' : 'translateX(-50%)'
                      }}
                    >
                      {month}
                    </div>
                  );
                })}
              </div>

              {/* Legend and footer */}
              <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <span className="mr-2">{language === 'fr' ? 'Moins' : 'Less'}</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-[10px] h-[10px] mx-1 ${getContributionColor(level)} rounded-sm`}
                    />
                  ))}
                  <span className="ml-2">{language === 'fr' ? 'Plus' : 'More'}</span>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* GitHub Repositories */}
        {!isLoading && !error && repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              {language === 'fr' ? 'Mes Derniers Dépôts GitHub' : 'My Recent GitHub Repositories'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lavender truncate flex-1 mr-2">
                      <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {repo.name}
                      </a>
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{repo.stars}</span>
                      <GitBranch className="w-4 h-4" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {repo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-lavender/20 text-lavender rounded-full">
                      {repo.language}
                    </span>
                    <div className="flex gap-1">
                      {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Interactive;