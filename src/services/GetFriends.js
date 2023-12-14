// async function retrieveAndStoreFriendsGames(steam64Id) {
//     if (!steam64Id) {
//       return { message: "Voer een Steam64 ID in.", games: [] };
//     }
  
//     try {
//       const response = await fetch(
//         `http://localhost:5176/api/Friends/RetrieveAndStoreFriendsGames?steam64Id=${steam64Id}`,
//         {
//           method: 'POST'
//         }
//       );
  
//       if (response.ok) {
//         return { message: "Vrienden en hun games opgeslagen", games: [] };
//       } else {
//         return {
//           message: "Er is een fout opgetreden bij het opslaan van vrienden en hun games.",
//           games: []
//         };
//       }
//     } catch (error) {
//       console.error(error);
//       return {
//         message: "Er is een fout opgetreden bij het opslaan van vrienden en hun games.",
//         games: []
//       };
//     }
//   }