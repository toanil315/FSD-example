import { blogHandlers } from '@/entities/blog/mocks/handlers';
import { setupWorker } from 'msw/browser';

/*
    when BE is not ready for apis, we can use msw to mock the apis
    this lib will use service worker to intercept the requests out going from the app
    and return the mocked data
*/
export const worker = setupWorker(...blogHandlers);
