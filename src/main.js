import { show } from '../views/view';

// APIs supported by the JS Widget
const supportedAPIs = ['init', 'showForm'];

function apiHandler(api, params) {
  console.log(api);
  if (!api) {
    throw Error('API method required');
  }
  // api = api.toLowerCase();

  if (supportedAPIs.indexOf(api) === -1) {
    throw Error(`Method ${api} is not supported`);
  }
  console.log(`Handling ${api}`, params);

  switch (api) {
    case 'showForm': 
      show();
      break;
    default:
      console.warn(`No handler defined for ${api}`);
  }
}

// Main entry of the application
function app(window) {
  console.log('Zeotap JS Widget starting');

  // Default configuration
  let configurations = {};

  let globalObject = window[window['JS-Widget']];
  let queue = globalObject.q;
  if (queue) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i][0].toLowerCase() === 'init') {
        configurations = {...configurations, ...queue[i][1]};
        console.log('Zeotap JS Configurations', configurations);
      } else {
        apiHandler(queue[i][0], queue[i][1]);
      }
    }
  }

  // Override for widgets API calls
  globalObject = apiHandler;
  globalObject.configurations = configurations;
}

app(window);