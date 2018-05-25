//
//  DonationListPresenter.swift
//  tamboon
//
//  Created by Woraphot Chokratanasombat on 24/5/2561 BE.
//  Copyright © 2561 Woraphot Chokratanasombat. All rights reserved.
//

import Foundation

class DonationListPresenter : DonationListPresenterProtocol {
    var view: DonationListViewProtocol!
    var wireframe: DonationListWireframeProtocol!

    func onReceived(donations: [DonationModel]) {
        view?.showDonations(with: donations)
    }

    func showDonate(forDonation donation: DonationModel) {
        wireframe?.presentDonateScreen(from: view,for: donation)
    }
}
