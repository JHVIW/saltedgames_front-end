// GetGames.js

async function storeGames(steam64Id) {
  if (!steam64Id) {
    return { message: "Voer een Steam64 ID in.", games: [] };
  }

  try {
    const response = await fetch(
      `http://localhost:5176/api/Game/StoreOwnedGames?steam64Id=${steam64Id}`,
      {
        method: 'POST'
      }
    );

    if (response.ok) {
      return { message: "Games opgeslagen.", games: [] };
    } else {
      return {
        message: "Er is een fout opgetreden bij het opslaan van de games.",
        games: []
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Er is een fout opgetreden bij het opslaan van de games.",
      games: []
    };
  }
}

async function getGames(steam64Id) {
  if (!steam64Id) {
    return { message: "Voer een Steam64 ID in.", games: [] };
  }

  const storeGamesResult = await storeGames(steam64Id);

  if (storeGamesResult.message !== "Games opgeslagen.") {
    return storeGamesResult;
  }

  try {
    const response = await fetch(
      `http://localhost:5176/api/Game/GetOwnedGamesWithNames?steam64Id=${steam64Id}`
    );

    if (response.ok) {
      const games = await response.json();
      return { message: "", games };
    } else {
      return {
        message: "Er is een fout opgetreden bij het ophalen van de games.",
        games: []
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Er is een fout opgetreden bij het ophalen van de games.",
      games: []
    };
  }
}

function convertMinutesToHours(minutes) {
  return (minutes / 60).toFixed(2);
}

function sortGamesByPlaytime(games) {
  return games.sort((a, b) => b.playtime - a.playtime);
}


async function getAllGames(page, pageSize) {
  try {
    const response = await fetch(
      `http://localhost:5176/api/Game/GetAllGames?page=${page}&pageSize=${pageSize}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return {
        message: "Er is een fout opgetreden bij het ophalen van de games.",
        games: [],
        total: 0
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Er is een fout opgetreden bij het ophalen van de games.",
      games: [],
      total: 0
    };
  }
}

export {
  storeGames,
  getGames,
  convertMinutesToHours,
  sortGamesByPlaytime,
  getAllGames 
};
