FROM elixir:1.3.2

# Set exposed ports
ENV PORT=4000 MIX_ENV=dev DEBIAN_FRONTEND=noninteractive

RUN mix local.hex --force
RUN mix local.rebar --force

RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez


WORKDIR /app
ADD . /app

CMD ["mix", "phoenix.server"]
