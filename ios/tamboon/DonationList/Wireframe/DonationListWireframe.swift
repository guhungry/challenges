//
// Created by Woraphot Chokratanasombat on 25/5/2018 AD.
// Copyright (c) 2018 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

class DonationListWireframe : DonationListWireframeProtocol {
    class func createDonationListModule() -> UIViewController {
        let navController = mainStoryboard.instantiateInitialViewController()
        if let view = navController?.childViewControllers.first as? DonationListView {
            var presenter: DonationListPresenterProtocol = DonationListPresenter()
            let wireframe: DonationListWireframeProtocol = DonationListWireframe()

            view.presenter = presenter
            presenter.view = view
            presenter.wireframe = wireframe
            return navController!
        }
        return UIViewController()
    }

    static var mainStoryboard: UIStoryboard {
        return UIStoryboard(name: "Main", bundle: Bundle.main)
    }
}
