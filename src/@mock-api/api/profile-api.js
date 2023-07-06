import mockApi from '../mock-api.json';
import mock from '../mock';

const timelineApi = mockApi.components.examples.profile_timeline.value;
const aboutApi = mockApi.components.examples.profile_about.value;

mock.onGet('/api/profile/timeline').reply((config) => {
  return [200, timelineApi];
});

mock.onGet('/api/profile/about').reply((config) => {
  return [200, aboutApi];
});
