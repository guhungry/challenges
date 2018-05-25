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

    func onReceived(donations: [DonationModel]) {
        view?.showDonations(with: donations)
    }
}
