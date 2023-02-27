## What are Grafana panel plugins?

Panel plugins allow you to add new types of visualizations to your dashboard, such as maps, clocks, pie charts, lists, and more.

Use panel plugins when you want to do things like visualize data returned by data source queries, navigate between dashboards, or control external systems (such as smart home devices).

## Getting started

### Configuring Grafana for Plugin Development

Grafana must first be configured to accept custom plugins after installing locally:

1. Decide on a folder where you want to hold your plugins and clone this repository as a subdirectory in that folder.
2. Navigate to C:\Program Files\GrafanaLabs\grafana\conf\custom.ini (on windows, for other OS find this file according to [this](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#configuration-file-location)).

#### inside of custom.ini
1. Uncomment path → plugins in custom.ini and change the path to the file that you cloned this repository as a subdirectory of.
2. Uncomment and change “app_mode” to development


### Frontend

Once configured, enter the cloned repository and perform setup as follows:

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode and run in watch mode

   ```bash
   yarn dev
   ```
