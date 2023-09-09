import popularCitiesByProvMode from "../model/popularCitiesByProv.model.js";

export const getPopularCitiesByProv = async (req, res) => {
    try {
        const popularCitiesByProv = await popularCitiesByProvMode.find();
        res.status(200).json(popularCitiesByProv);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}