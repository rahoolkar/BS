const getProfile = (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      message: "User data fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getProfile };
