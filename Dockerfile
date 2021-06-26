# FROM node:12-alpine

# WORKDIR /opt/app

# COPY package*.json ./

# COPY yarn.lock ./

# COPY . .

# RUN yarn install --frozen-lockfile

# CMD [ "yarn", "dev" ]

FROM node:12

# RUN curl -o- -L https://yarnpkg.com/install.sh | bash && export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.* ./

RUN yarn install

# Bundle app source
COPY . .

USER node

EXPOSE 3000 3030

# To avoid having a problem after installing a package with a different node version
RUN npm rebuild node-sass

CMD ["yarn", "dev"]