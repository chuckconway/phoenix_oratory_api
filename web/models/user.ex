defmodule PhoenixOratoryApi.User do
  use PhoenixOratoryApi.Web, :model
  import Ecto.Changeset

  schema "users" do
    field :firstname, :string
    field :lastname, :string
    field :username, :string
    field :email, :string
    field :crypted_password, :string
    field :password, :string, virtual: true
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:firstname, :lastname, :email, :username, :password])
    |> validate_required([:firstname, :lastname, :email, :username, :password])
    |> validate_length(:username, min: 3, max: 20)
    |> validate_length(:firstname, min: 1, max: 20)
    |> validate_length(:lastname, min: 1, max: 20)
    |> validate_length(:password, min: 5, max: 50)
    |> validate_format(:email, ~r/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/)
    |> put_password_hash()
  end

  defp put_password_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :crypted_password, Comeonin.Bcrypt.hashpwsalt(pass))
      _->
        changeset
    end
  end
end
