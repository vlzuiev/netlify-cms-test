import { FC } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import dynamic from 'next/dynamic';

import { config } from '../admin/config';

const Cms = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('netlify-cms-app').then((cms: CMS) => {
      return () => {
        cms.init({ config });
        return <span />;
      };
    }),
  { ssr: false, loading: () => <LinearProgress /> }
);

const Admin: FC = () => {
  return <Cms />;
};

export default Admin;
