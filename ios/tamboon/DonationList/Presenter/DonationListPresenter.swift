//
//  DonationListPresenter.swift
//  tamboon
//
//  Created by Woraphot Chokratanasombat on 24/5/2561 BE.
//  Copyright © 2561 Woraphot Chokratanasombat. All rights reserved.
//

import Foundation

class DonationListPresenter : DonationListPresenterProtocol {
    func numberOfDonations () -> Int {
        return 3
    }

    func donation(atIndex index: Int) -> DonationPresenter {
        return DonationPresenter()
    }
}
