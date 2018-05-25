//
// Created by Woraphot Chokratanasombat on 25/5/2018 AD.
// Copyright (c) 2018 Woraphot Chokratanasombat. All rights reserved.
//

import Foundation

protocol DonationViewProtocol {
    func set(donation: DonationModel)
}

protocol DonationListViewProtocol {
    var presenter: DonationListPresenterProtocol? { get set }

    func showDonations (with donations: [DonationModel])
}

protocol DonationListPresenterProtocol {
    var view: DonationListViewProtocol! { get set }

    func onReceived(donations: [DonationModel])
}