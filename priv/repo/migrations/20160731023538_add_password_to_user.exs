defmodule PhoenixOratoryApi.Repo.Migrations.AddPasswordToUser do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :password, :string
      remove :user_id
    end
  end
end
