FROM elixir:1.3.2

# Set exposed ports
ENV PORT=4000 MIX_ENV=dev DEBIAN_FRONTEND=noninteractive

WORKDIR /app
ADD . /app

RUN mix local.hex --force
RUN mix local.rebar --force

RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez

RUN mix deps.get
RUN mix compile


CMD ["mix", "phoenix.server"]
