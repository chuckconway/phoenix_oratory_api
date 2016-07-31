defmodule PhoenixOratoryApi.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :crypted_password, :string
      add :username, :string
    end
    create unique_index(:users, [:username])

  end
end
