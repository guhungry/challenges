//
//  DonationView.swift
//  tamboon
//
//  Created by Woraphot Chokratanasombat on 24/5/2561 BE.
//  Copyright © 2561 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit
import SDWebImage

class DonationTableCellView: UITableViewCell {
    @IBOutlet weak var picture: UIImageView!
    @IBOutlet weak var name: UILabel!

    func set(donation data: DonationModel) {
        picture.sd_setImage(with: URL(string: data.picture), placeholderImage: UIImage(named: "Dummy.jpg"))
        name.text = data.name
    }
}
