defmodule PhoenixOratoryApi.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :firstname, :string
      add :lastname, :string
      add :user_id, :string
      add :email, :string

      timestamps()
    end
    create unique_index(:users, [:user_id])

  end
end
