//
//  DonationView.swift
//  tamboon
//
//  Created by Woraphot Chokratanasombat on 24/5/2561 BE.
//  Copyright © 2561 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

class DonationView : UITableViewCell {
    @IBOutlet weak var picture: UIImageView!
    @IBOutlet weak var name: UILabel!

    func set(forDonation data: DonationPresenter) {
        name.text = data.name()
    }
}
