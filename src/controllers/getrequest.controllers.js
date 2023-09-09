import worldCupData from "../model/worldcup.model.js";

export const getWorldCupData = async (req, res) => {
  const year = req.params.id;
  try {
    if (year) {
      const worldCupDataByYear = await worldCupData.find({ year: year })
      res.status(200).json(worldCupDataByYear);}
      else {
        const worldCupDataAllYears = await worldCupData.find();
        res.status(200).json(worldCupDataAllYears);
      }
    } 
    catch (error) {
      res.status(404).json({ message: error.message });
    }
  } 
