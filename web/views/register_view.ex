defmodule PhoenixOratoryApi.UserView do
  use PhoenixOratoryApi.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, PhoenixOratoryApi.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, PhoenixOratoryApi.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email}
  end
end
