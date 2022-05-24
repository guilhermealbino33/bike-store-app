import React from 'react';
import { Banner } from '@shopify/polaris';

const ErrorBannerComponent = ({ error }) => {
    return (
        <Banner
            title="Something go wrong"
            action={{ content: 'Review risk analysis' }}
            status="critical"
        >
            <p>
                {error}
            </p>
        </Banner>
    )
}

export default ErrorBannerComponent