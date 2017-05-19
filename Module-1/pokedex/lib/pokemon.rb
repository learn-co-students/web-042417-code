class Pokemon
  attr_accessor :id, :name, :type, :db

  def initialize id, name, type, db
    @id, @name, @type, @db = id, name, type, db
  end

  def save
    self.db.execute("INSERT INTO pokemon (name, type) VALUES (?, ?)", self.name, self.type)
    "You successfully saved #{self.name}!"
  end

  def self.all db
    all_pokemon = db.execute("SELECT * FROM pokemon")
    all_pokemon.map do |p|
      Pokemon.new(p[0],p[1],p[2],db)
    end
  end

  def self.find_by_id id_num, db
    poke_info = db.execute("SELECT * FROM pokemon WHERE id=?", id_num).flatten
    Pokemon.new(poke_info[0],poke_info[1],poke_info[2],db)
  end
end
