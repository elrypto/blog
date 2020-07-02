import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
  faTwitter,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Home = ({ postObjs }) => {
  console.log('home.postObjs:', postObjs);

  return (
    <div className="flex m-6 text-cool-gray-600 md:flex-row sm:flex-col">
      <div>
        <div className="flex items-end mt-8 ml-4 space-x-6 text-4xl">
          <div className="flex p-4 ml-2 font-medium bg-gray-700 rounded-lg shadow-lg text-cool-gray-500">
            elrypto.dev
          </div>
          <div>
            <a data-for="twitter-icon" data-tip="https://twitter.com/elrypto">
              <FontAwesomeIcon
                className="hover:text-cool-gray-400"
                icon={faTwitter}
              />
            </a>
            <ReactTooltip
              id="twitter-icon"
              className="custom-color-no-arrow"
              delayHide={500}
              textColor="#5F4B8BFF"
              backgroundColor="#E69A8DFF"
              effect="solid"
            />
          </div>
          <div>
            <a data-for="github-icon" data-tip="https://github.com/lrypto">
              <FontAwesomeIcon
                className="hover:text-cool-gray-400"
                icon={faGithub}
              />
            </a>
            <ReactTooltip
              id="github-icon"
              className="custom-color-no-arrow"
              delayHide={500}
              textColor="#5F4B8BFF"
              backgroundColor="#E69A8DFF"
              effect="solid"
            />
          </div>
          <div>
            <a
              data-for="youtube-icon"
              data-tip="https://www.youtube.com/channel/UC0CFiIg0jhtBRy_U0Rs4gpw"
            >
              <FontAwesomeIcon
                className="hover:text-cool-gray-400"
                icon={faYoutube}
              />
            </a>
            <ReactTooltip
              id="youtube-icon"
              className="custom-color-no-arrow"
              delayHide={500}
              textColor="#5F4B8BFF"
              backgroundColor="#E69A8DFF"
              effect="solid"
            />
          </div>
          <div>
            <a data-for="email-icon" data-tip="elrypto@gmail.com">
              <FontAwesomeIcon
                className="hover:text-cool-gray-400"
                icon={faMailBulk}
              />
            </a>
            <ReactTooltip
              id="email-icon"
              className="custom-color-no-arrow"
              delayHide={500}
              textColor="#5F4B8BFF"
              backgroundColor="#E69A8DFF"
              effect="solid"
            />
          </div>
        </div>
        <div className="mx-10 mt-16">
          <span className="text-xl text-gray-500">
            Modern Application Engineering for Performance and Scale{' '}
          </span>
          <ul>
            <li>React</li>
            <li>nextjs</li>
            <li>Typescript</li>
            <li>GraphQL</li>
            <li>Hasura</li>
            <li>tailwindcss</li>
            <li>Google Cloud (gcp)</li>
          </ul>
          <div className="mt-16 text-xl text-gray-700">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon className="ml-2" icon={faGithub} />
            <FontAwesomeIcon className="ml-2" icon={faYoutube} />
          </div>
        </div>
      </div>
      <div className="ml-10">
        {postObjs.map((post) => (
          <EntryCard
            key={post.slug}
            date={post.posted}
            title={post.title}
            topics={post.tags}
            linkTo={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

const EntryCard = ({ date, title, topics, linkTo }) => (
  <Link href={`/b/${linkTo}`}>
    <a>
      <div className="flex flex-col h-64 p-4 m-2 bg-gray-800 border-2 border-gray-700 rounded-lg shadow-lg w-80 hover:border-gray-500 hover:bg-gray-900">
        <div className="text-sm text-gray-500">{topics}</div>

        <div className="flex flex-col justify-end h-full text-xl font-semibold text-center text-gray-400">
          <div>{title}</div>
          <div className="mt-8 text-gray-700">{date}</div>
        </div>
      </div>
    </a>
  </Link>
);

export const getStaticProps = async () => {
  // const files = fs.readdirSync('posts');

  // const paths = files.map((filename) => ({
  //   params: {
  //     slug: filename.replace('.md', ''),
  //   },
  // }));

  const props = {
    props: {
      postObjs: [
        {
          slug: 'hasura-for-dev',
          posted: 'June 2020',
          title: 'Hasura for Development Setup',
          tags: ['hasura', 'graphQL', 'docker', 'heroku'],
        },
        {
          slug: 'hasura-on-gcp',
          posted: 'July 2020',
          title: 'Hasura on Google Cloud',
          tags: ['hasura', 'graphQL', 'Google Cloud', 'GCP'],
        },
      ],
    },
  };

  return props;
};
