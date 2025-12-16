const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Erreur interne du serveur';

    console.error(`[${status}] ${err.stack || message}`);

    res.status(status).json({
        success: false,
        message: message,
    });
};

module.exports = errorHandler;