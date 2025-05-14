import { Layout } from "@/components/layout/Layout";
import { useState } from "react";

const clubs = [
  { id: 1, name: "Paris Saint-Germain", country: "France", league: "Ligue 1" },
  { id: 2, name: "Manchester City", country: "England", league: "Premier League" },
  { id: 3, name: "Real Madrid", country: "Spain", league: "La Liga" },
  { id: 4, name: "Bayern Munich", country: "Germany", league: "Bundesliga" },
  { id: 5, name: "Juventus", country: "Italy", league: "Serie A" },
  // Ajoutez plus de clubs ici
];

const Prono = () => {
  const [selectedClub1, setSelectedClub1] = useState("");
  const [selectedClub2, setSelectedClub2] = useState("");
  const [filteredClubs, setFilteredClubs] = useState(clubs);
  const [chance1, setChance1] = useState<number | null>(null);
  const [chance2, setChance2] = useState<number | null>(null);

  const handleFilter = (query: string) => {
    const filtered = clubs.filter(
      (club) =>
        club.name.toLowerCase().includes(query.toLowerCase()) ||
        club.country.toLowerCase().includes(query.toLowerCase()) ||
        club.league.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredClubs(filtered);
  };

  const calculateChances = () => {
    const randomChance1 = Math.floor(Math.random() * 101);
    const randomChance2 = 100 - randomChance1;
    setChance1(randomChance1);
    setChance2(randomChance2);
  };

  return (
    <Layout>
      <section className="py-20">
        <h1 className="text-3xl font-bold mb-6">Prédictions de Matchs de Football</h1>
        <p className="mb-4">Sélectionnez deux clubs pour estimer leurs chances de victoire.</p>

        <div className="space-y-6">
          {/* Club 1 */}
          <div>
            <label htmlFor="club1" className="block text-sm font-medium mb-1">
              Club 1
            </label>
            <input
              type="text"
              id="club1"
              value={selectedClub1}
              onChange={(e) => {
                setSelectedClub1(e.target.value);
                handleFilter(e.target.value);
              }}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Recherchez un club"
            />
            <ul className="mt-2 max-h-40 overflow-y-auto border rounded-md">
              {filteredClubs.map((club) => (
                <li
                  key={club.id}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedClub1(club.name)}
                >
                  {club.name} ({club.country} - {club.league})
                </li>
              ))}
            </ul>
          </div>

          {/* Club 2 */}
          <div>
            <label htmlFor="club2" className="block text-sm font-medium mb-1">
              Club 2
            </label>
            <input
              type="text"
              id="club2"
              value={selectedClub2}
              onChange={(e) => {
                setSelectedClub2(e.target.value);
                handleFilter(e.target.value);
              }}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Recherchez un club"
            />
            <ul className="mt-2 max-h-40 overflow-y-auto border rounded-md">
              {filteredClubs.map((club) => (
                <li
                  key={club.id}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedClub2(club.name)}
                >
                  {club.name} ({club.country} - {club.league})
                </li>
              ))}
            </ul>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateChances}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Calculer les chances
          </button>

          {/* Results */}
          {chance1 !== null && chance2 !== null && (
            <div className="mt-6">
              <p className="text-lg">
                <strong>{selectedClub1}</strong> a <strong>{chance1}%</strong> de chances de gagner.
              </p>
              <p className="text-lg">
                <strong>{selectedClub2}</strong> a <strong>{chance2}%</strong> de chances de gagner.
              </p>
              <div className="mt-4 flex items-center">
                <div
                  className="h-4 bg-blue-500"
                  style={{ width: `${chance1}%` }}
                ></div>
                <div
                  className="h-4 bg-red-500"
                  style={{ width: `${chance2}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Prono;