defmodule PhoenixOratoryApi.Router do
  use PhoenixOratoryApi.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PhoenixOratoryApi do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api/v1", PhoenixOratoryApi do
    pipe_through :api

    resources "/users", UserController
    resources "/register", RegisterController, only: [:create]
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhoenixOratoryApi do
  #   pipe_through :api
  # end
end
