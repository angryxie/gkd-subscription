import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 61892601,
  name: "Angryxie's GKD Subscription",
  version: 2,
  author: 'angryxie',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/angryxie/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
