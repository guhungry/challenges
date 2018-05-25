//
//  DonationListPresenter.swift
//  tamboon
//
//  Created by Woraphot Chokratanasombat on 24/5/2561 BE.
//  Copyright © 2561 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

class DonationListView: UIViewController, UITableViewDelegate, UITableViewDataSource, DonationListViewProtocol {
    @IBOutlet weak var tableDonation: UITableView!
    var presenter: DonationListPresenterProtocol!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view, typically from a nib.
        presenter = DonationListPresenter()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return presenter.numberOfDonations();
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = self.tableDonation.dequeueReusableCell(withIdentifier: "DonationRow", for: indexPath) as? DonationView {
            cell.set(donation: presenter.donation(atIndex: indexPath.row))
            return cell
        }
        return UITableViewCell()
    }
}

