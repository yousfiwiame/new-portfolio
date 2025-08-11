import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, GitPullRequest, Star } from 'lucide-react';

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  payload: any;
  created_at: string;
}

const GitHubActivity = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/yousfiwiame/events/public'
        );
        const data = await response.json();
        setEvents(data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching GitHub activity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'PushEvent':
        return <GitCommit className="w-5 h-5" />;
      case 'PullRequestEvent':
        return <GitPullRequest className="w-5 h-5" />;
      case 'CreateEvent':
        return <GitBranch className="w-5 h-5" />;
      case 'WatchEvent':
        return <Star className="w-5 h-5" />;
      default:
        return <GitCommit className="w-5 h-5" />;
    }
  };

  const getEventDescription = (event: GitHubEvent) => {
    switch (event.type) {
      case 'PushEvent':
        return `Pushed ${event.payload.commits?.length || 0} commits to`;
      case 'PullRequestEvent':
        return `${event.payload.action} pull request in`;
      case 'CreateEvent':
        return `Created ${event.payload.ref_type} in`;
      case 'WatchEvent':
        return 'Starred repository';
      default:
        return 'Interacted with';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <GitBranch className="w-5 h-5" />
        Recent GitHub Activity
      </h3>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="text-primary">{getEventIcon(event.type)}</div>
              <div className="flex-1">
                <p className="text-sm">
                  {getEventDescription(event)}{' '}
                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    {event.repo.name}
                  </a>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {formatDate(event.created_at)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default GitHubActivity; 