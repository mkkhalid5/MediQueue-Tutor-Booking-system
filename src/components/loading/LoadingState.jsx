import { ProgressCircle } from '@heroui/react';
import React from 'react';

const LoadingState = () => {
    return (
        <div>
            <ProgressCircle isIndeterminate aria-label="Loading">
                <ProgressCircle.Track>
                    <ProgressCircle.TrackCircle />
                    <ProgressCircle.FillCircle />
                </ProgressCircle.Track>
            </ProgressCircle>
        </div>
    );
};

export default LoadingState;