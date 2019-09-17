# :nodoc
FROM ruby:2.6.3

# Ставим пакеты.
# RUN apt-get update -yqq && \
#     apt-get install --allow-unauthenticated -yqq

# js runtime
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install -y nodejs

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn

# Создаем директорию приложения.
RUN mkdir /app

# Переходим в рабочую директорию.
WORKDIR /app

# :nodoc
RUN echo -e "install: --no-rdoc --no-ri\nupdate:  --no-rdoc --no-ri" > $HOME/.gemrc

# :nodoc
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

# :nodoc
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

# :nodoc
RUN bundle config --global jobs `grep -c cores /proc/cpuinfo`
RUN bundle install --retry 3

# :nodoc
# RUN yarn install

# :nodoc
COPY . /app

EXPOSE 3001