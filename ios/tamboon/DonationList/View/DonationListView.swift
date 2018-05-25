//
//  DonationListPresenter.swift
//  tamboon
//
//  Created by Woraphot Chokratanasombat on 24/5/2561 BE.
//  Copyright © 2561 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

class DonationListView: UIViewController, UITableViewDelegate, UITableViewDataSource  {
    @IBOutlet weak var tableDonation: UITableView!
    var presenter: DonationListPresenterProtocol?
    private var donations : [DonationModel] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view, typically from a nib.
        presenter = DonationListPresenter()
        presenter?.view = self

        presenter?.onReceived(donations: [DonationModel(name: "bee"), DonationModel(name: "baa"), DonationModel(name: "fdae")])
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return donations.count;
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = self.tableDonation.dequeueReusableCell(withIdentifier: "DonationRow", for: indexPath) as? DonationView {
            cell.set(donation: donations[indexPath.row])
            return cell
        }
        return UITableViewCell()
    }
}

extension DonationListView : DonationListViewProtocol {
    func showDonations (with donations: [DonationModel]) {
        self.donations = donations
    }
}

