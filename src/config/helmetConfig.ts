import helmet, { hidePoweredBy, noSniff } from 'helmet';

export const getHelmetConfig = () => {
    const isDevelopment = process.env.NODE_ENV === 'development';

    // Base configuration for helmet
    const baseConfig = {
        contentSecurityPolicy: false,
        hidePoweredBy: true,
        noSniff: true,
    };

    if (isDevelopment) {
        return helmet({
            ...baseConfig,
            hsts: false,
        });
    }

    // In production, we want to enable HSTS for better security
    return helmet({
        ...baseConfig,
        hsts: {
            maxAge: 31536000, // 1 year in seconds
            includeSubDomains: true,
            preload: true,
        },
        frameguard: {
            action: 'deny',
        },
        referrerPolicy: {
            policy: 'no-referrer',
        },      
    });
}