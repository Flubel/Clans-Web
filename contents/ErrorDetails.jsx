import React from 'react'
import styles from '@/styles/Home.module.css'

const ErrorDetails = () => {
    return (
        <div className={styles.errPage}>

            <div className={styles.errHeader}>
                Inventory Desync Exploit
            </div>

            <div className={styles.errSub}>
                Clan Chest Vulnerability Report
            </div>

            <div className={styles.errBody}>

                <p>
                    This vulnerability occurs when the <span className={styles.hl}>server and client become desynchronized</span> during container interaction. When a player interacts with a clan chest under <span className={styles.hl}>unstable packet conditions</span>, the inventory state may not be properly finalized, leading to inconsistent transaction handling.
                </p>

                <p>
                    In certain cases, item movement operations can be processed <span className={styles.hl}>twice</span> due to missing synchronization between <span className={styles.hl}>open, interact, and close states</span>. This results in duplication where items appear in both the player inventory and the clan chest simultaneously.
                </p>

                <p>
                    The issue is not caused by any specific hacked client, but rather a <span className={styles.hl}>logic-level weakness</span> in how inventory state transitions are handled on the server side. It becomes more noticeable under <span className={styles.hl}>lag, packet interruption, or delayed container closure</span> scenarios.
                </p>

                <p>
                    We are currently implementing a <span className={styles.hl}>fully server-authoritative inventory model</span> to ensure all item transactions are validated in real-time. This removes dependency on client-side state or container close events, which are unreliable under modified or unstable network conditions.
                </p>

                <p>
                    This is a <span className={styles.hlSafe}>controlled and non-critical issue</span>. It does not lead to server crashes or world corruption. The impact is limited strictly to <span className={styles.hl}>item duplication in clan chest systems</span> and does not affect core server stability.
                </p>

                <p>
                    A fix is already in progress and will ensure full prevention of <span className={styles.hl}>desynchronization</span> through strict event handling and immediate state updates on all inventory actions.
                </p>

            </div>

            {/* 🔧 TEMPORARY MITIGATION SECTION */}
            <div className={styles.errSection}>
                <h2 className={styles.errSectionTitle}>
                    Temporary Mitigation
                </h2>

                <p className={styles.errBodyText}>
                    As an immediate precautionary measure, the <span className={styles.hl}>Clan Chest feature can be disabled via config.yml</span> to prevent exploitation while the permanent fix is being deployed.

                    Setting the clan chest module to <span className={styles.hl}>disabled</span> will fully eliminate exposure to the desynchronization exploit until the updated inventory handling system is released.

                    This action is recommended for servers operating in competitive or high-value economy environments where item duplication impact must be minimized immediately.
                </p>
            </div>

            <div className={styles.errMetaFull}>
                <div>Severity: CRITICAL (Level 10)</div>
                <div>Category: Container Transaction Race Condition</div>
                <div>Impact: Item Duplication (Economy-Only)</div>
                <div>Root Cause: Server-side state desynchronization</div>
                <div>Status: Patch in Progress</div>
                <div>Stability Risk: None (No crash or world damage impact)</div>
                <div>Mitigation: Config-based feature disable available</div>
            </div>

        </div>
    )
}

export default ErrorDetails