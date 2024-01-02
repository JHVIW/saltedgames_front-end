async function getUserTags(steam64Id) {
    if (!steam64Id) {
        return { message: "Voer een Steam64 ID in.", tags: [] };
    }

    try {
        // Ophalen van gebruikerstags
        const response = await fetch(
            `http://localhost:5009/api/Recommendation/GetUserTags?steam64Id=${steam64Id}`
        );

        if (!response.ok) {
            return {
                message: "Er is een fout opgetreden bij het ophalen van de tags.",
                tags: [],
            };
        }

        const tags = await response.json();

        // Omvormen van tags naar vereist formaat
        const transformedTags = tags.map(tag => ({
            tagid: 0,
            name: tag.name
        }));

        // Versturen van de omgevormde tags naar het topgamesbyusertags endpoint
        const topGamesResponse = await fetch('http://localhost:5176/api/Game/topgamesbyusertags', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transformedTags),
        });

        if (!topGamesResponse.ok) {
            throw new Error('Fout bij het ophalen van top games.');
        }

        const topGamesData = await topGamesResponse.json();

        return { message: "", tags: topGamesData };

    } catch (error) {
        console.error(error);
        return {
            message: "Er is een fout opgetreden bij het ophalen van de tags.",
            tags: [],
        };
    }
}

export { getUserTags };
