defmodule PhoenixOratoryApi.RegisterController do
  use PhoenixOratoryApi.Web, :controller

  alias PhoenixOratoryApi.User

  # def index(conn, _params) do
  #   users = Repo.all(User)
  #   render(conn, "index.json", users: users)
  # end

  def create(conn, user_params) do
    changeset = User.changeset(%User{}, user_params)

    case Repo.insert(changeset) do
      {:ok, user} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", user_path(conn, :show, user))
        |> render("show.json", user: user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(PhoenixOratoryApi.ChangesetView, "error.json", changeset: changeset)
    end
  end
end
