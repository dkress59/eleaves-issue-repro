# Minimum Reproduction Repository

## Setup

This is the minimum reproduction repository for a way larger Yarn-PNP monorepo.

The original project uses:

* Yarn 3 as the dependency manager (plug-and-play)
* Docker Compose for local development and deployment
* Webpack as the bundler
* TailwindCSS via postcss(-loader) as the design framework
* Yarn workspaces to be able to bundle apps separately, so they can be deployed (to Webflow and WordPress) as standalone apps
* NodeJS 18 for native `fetch` and native `FormData`
* Storybook for local development (not included)
* NestJS as the back-end (not included)
* Directus as the CMS (not included)
* EJS for email templating (not included)
* Jest for unit tests + e2e tests (not included)

### Development

* Run `docker compose up` (preferred) or `yarn start:dashboard` to start the dashboard workspace, which acts as the entrypoint for all other apps (in this repo, boiled down to `demo-app-1` and `demo-app-2`)
* Run `yarn start:demo1` or `yarn start:demo2` to run apps in standalone mode

*Note: the `postcss-scss` dependency is only included because in one package (":server") the stylesheet must be pre-built before deployment without webpack, via `yarn postcss ./apps/_common/src/css/email.scss -o ./apps/_server/src/mail/email.css`*

## Issues

* **Tailwind/PostCSS:**
  * When running `docker compose up`, in approximately four out of five times the compilation fails with

    ```bash
      eleaves-repro-app        | (6:2) /eleaves/apps/_dashboard/src/dashboard-app.scss The `bg-fluid-horizontal` class does not exist. If `bg-fluid-horizontal` is a custom class, make sure it is defined within a `@layer` directive.
      eleaves-repro-app        |
      eleaves-repro-app        |   4 |
      eleaves-repro-app        |   5 |        .welcome {
      eleaves-repro-app        | > 6 |                @apply relative bg-fluid-horizontal mb-lg;
      eleaves-repro-app        |     |        ^
      eleaves-repro-app        |   7 |        }
      eleaves-repro-app        |   8 |
      eleaves-repro-app        |  @ ./src/dashboard-app.scss 8:6-529 22:17-24 26:7-21 58:25-39 59:36-47 59:50-64 63:6-73:7 64:54-65 64:68-82 70:42-53 70:56-70 72:21-28 83:0-499 83:0-499 84:22-29 84:33-47 84:50-64 61:4-74:5
      eleaves-repro-app        |  @ ./src/dashboard-app.tsx 7:0-31
      eleaves-repro-app        |  @ ./src/index.tsx 10:24-50
    ```

  * The same issue occasionally occurs when directly running `yarn start:dashboard` or `yarn start:demo1` / `yarn start:demo2`, although this is not an option in the original project, anyway
  * Interestingly, in this reproduction repo, select styles from the [Base Stylesheet](apps/_common/src/css/base.scss#L114) don't take unless they are moved out of the `@layer base {}` block
