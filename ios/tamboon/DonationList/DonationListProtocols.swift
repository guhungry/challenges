//
// Created by Woraphot Chokratanasombat on 25/5/2018 AD.
// Copyright (c) 2018 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

protocol DonationViewProtocol {
    func set(donation: DonationModel)
}

protocol DonationListViewProtocol {
    var presenter: DonationListPresenterProtocol? { get set }

    func showDonations (with donations: [DonationModel])
}

protocol DonationListPresenterProtocol {
    var view: DonationListViewProtocol! { get set }
    var wireframe: DonationListWireframeProtocol! { get set }

    func onReceived(donations: [DonationModel])
    func showDonate(forDonation donation: DonationModel)
}

protocol DonationListWireframeProtocol {
    func presentDonateScreen(from view: DonationListViewProtocol, for donation: DonationModel)
    static func createDonationListModule() -> UIViewController
}