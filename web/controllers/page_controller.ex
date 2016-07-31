defmodule PhoenixOratoryApi.PageController do
  use PhoenixOratoryApi.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
