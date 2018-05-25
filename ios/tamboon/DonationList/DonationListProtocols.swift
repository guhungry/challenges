//
// Created by Woraphot Chokratanasombat on 25/5/2018 AD.
// Copyright (c) 2018 Woraphot Chokratanasombat. All rights reserved.
//

import Foundation

protocol DonationViewProtocol {
    func set(donation: DonationPresenterProtocol)
}

protocol DonationListViewProtocol {
    var presenter: DonationListPresenterProtocol! { get set }
}

protocol DonationListPresenterProtocol {
    func numberOfDonations () -> Int
    func donation(atIndex index: Int) -> DonationPresenterProtocol
}

protocol DonationPresenterProtocol {
    func name () -> String
}