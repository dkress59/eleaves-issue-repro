FROM node:18 as install

WORKDIR /eleaves
COPY . .
RUN yarn install


FROM install as build
RUN yarn build


FROM install as dev-app

EXPOSE 3000
CMD yarn start


FROM install as dev-server

EXPOSE 8000
CMD yarn start:server


FROM install as dev-storybook

EXPOSE 6006
CMD yarn storybook


FROM build as app

EXPOSE 3000
CMD yarn start:dashboard:prod


FROM build as server

EXPOSE 8000
CMD yarn start:server:prod


FROM install as storybook
RUN yarn build:storybook

EXPOSE 6006
CMD yarn serve:storybook

