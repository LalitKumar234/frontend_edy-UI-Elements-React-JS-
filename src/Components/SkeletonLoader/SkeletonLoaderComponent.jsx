import React from 'react'
import './SkeletonLoader.css'

const SkeletonLoaderComponent = () => {
    return (
        <div className='productsSkeletonContainer'>
            <div className="productSkeleton">
                <div className="pImageSkeleton"></div>
                <div className="textSkeleton">
                    <div className="descriptionTextSkeleton"></div>
                    <div className="descriptionTextSkeleton short"></div>
                </div>
            </div>
            <div className="productSkeleton">
                <div className="pImageSkeleton"></div>
                <div className="textSkeleton">
                    <div className="descriptionTextSkeleton"></div>
                    <div className="descriptionTextSkeleton short"></div>
                </div>
            </div>
            <div className="productSkeleton">
                <div className="pImageSkeleton"></div>
                <div className="textSkeleton">
                    <div className="descriptionTextSkeleton"></div>
                    <div className="descriptionTextSkeleton short"></div>
                </div>
            </div>
            <div className="productSkeleton">
                <div className="pImageSkeleton"></div>
                <div className="textSkeleton">
                    <div className="descriptionTextSkeleton"></div>
                    <div className="descriptionTextSkeleton short"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoaderComponent