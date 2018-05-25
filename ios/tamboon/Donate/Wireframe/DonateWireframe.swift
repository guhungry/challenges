//
// Created by Woraphot Chokratanasombat on 25/5/2018 AD.
// Copyright (c) 2018 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

class DonateWireframe : BaseWireframe, DonateWireframeProtocol {
    class func createDonateModule(from donation: DonationModel) -> UIViewController {
        if let view = mainStoryboard.instantiateViewController(withIdentifier: "DonateView") as? DonateView {
            view.donation = donation
            return view
        }
        return UIViewController()
    }
}
