FROM bitwalker/alpine-elixir-phoenix:latest

# Set exposed ports
EXPOSE 4000
ENV PORT=4000 MIX_ENV=dev

COPY . /var/www
WORKDIR /var/www

EXPOSE $PORT

# Cache elixir deps
#ADD mix.exs mix.lock ./
RUN mix do deps.get, deps.compile

# Same with npm deps
#ADD package.json package.json
#RUN npm install

#ADD . .

# Run frontend build, compile, and digest assets
RUN mix do compile, phoenix.digest

USER default

CMD ["/var/www/mix", "phoenix.server"]
