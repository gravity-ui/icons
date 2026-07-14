// Generates the AI-agent docs tree (INDEX.md + cleaned component/hook READMEs)
// shipped inside the npm tarball. Run via `npm run build:docs` (chained into `build`).
import {buildDocs} from '@gravity-ui/gulp-utils';

buildDocs();
