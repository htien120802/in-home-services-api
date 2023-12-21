import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionDeleteProvider, actionGetAllProviders } from 'store/actions'
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';

function InternalPage(){
    const dispatch = useDispatch()
    const providers = useSelector((state) => state.Admin.providers);

    const handleUpdateProduct = (couponId) => {
        const selectedProduct = providers.content.find((product) => product.id === couponId);

        dispatch(
            openModal({
                title: 'Update Provider Profile',
                bodyType: MODAL_BODY_TYPES.UPDATE_PRODUCT,
                extraObject: selectedProduct,
                size: 'lg',
            })
        );
    };

    const handleDeleteUser = (couponId) => {
        dispatch(actionDeleteProvider({id: couponId}))
    };

    useEffect(() => {
        dispatch(setPageTitle({ title : "Providers"}))
        dispatch(actionGetAllProviders())
    }, [dispatch])
    
    return(
        <div className="h-4/5 bg-base-200">
            <div className="text-accent">
                <div className="max-w-md">

                <table className="table w-full">
                        <thead>
                            <tr>
                            <th style={{ position: 'static', left: 'auto' }}>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Avatar</th>
                            <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {providers && providers.content ? (
                                providers.content.map((provider) => (
                                    <tr key={provider.email}>
                                    <td>{provider.firstName}</td>
                                    <td>{provider.lastName}</td>
                                    <td>{provider.email}</td>
                                    <td>{provider.phone}</td>
                                    <td>
                                        {provider.avatar ? (
                                        <img src={provider.avatar} alt={`Avatar of ${provider.firstName}`} style={{ width: '50px', height: '50px' }} />
                                        ) : (
                                        'No Avatar'
                                        )}
                                    </td>
                                    <td>
                                        {provider.addresses.map((address) => (
                                        <div key={address.id}>
                                            {address.number}, {address.street}, {address.ward}, {address.district}, {address.city}
                                        </div>
                                        ))}
                                    </td>
                                    <td>
                                        <button className="icon-btn" onClick={() => handleUpdateProduct(provider.id)}>
                                            <ArrowPathIcon className="h-5 w-5" />
                                        </button>
                                        <button className="icon-btn" onClick={() => handleDeleteUser(provider.id)}>
                                        <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                                ))
                            ) : (
                                <tr>
                                <td colSpan="2">No providers found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InternalPage