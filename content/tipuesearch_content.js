var tipuesearch = {"pages": [{'title': 'Week', 'text': 'Week2~5 \n Week6~9 \n Week10~14 \n Week15~18', 'tags': '', 'url': 'Week.html'}, {'title': 'Week2~5', 'text': '建立個人倉儲 \n 1.進入老師網站下載2019fall \n 2.進入github建立新倉儲 \n 3.接著把倉儲的網址clone至隨身碟中 \n 4.把老師的倉儲git submodule至cad2019資料夾中的cmsimde \n 5.接著輸入python wsgi.py即可開啟進端來修改網頁 \n 6.修改好後按下save並轉成靜態網站 \n 7.使用git status git add . git commit git push 來將更新完的資料推上github \n 下連結為操作影片: https://youtu.be/zWk2l1IycY8 \n 第三周為編譯solvespace \n 1.至老師的首頁並將游標移至TASK接著點選SOLIVESPACE編譯 \n 2.進入solviespace編譯後裡面就有清楚交代每個步驟來進行編譯 \n 3.跟著步驟做完後再將老師給的.dall補釘包下載下來複製貼上到cad2019中來補齊缺失的檔案 \n 下連結為操作影片: https://youtu.be/KsRULmWi-Os \n 第五周為操作solvespace \n 基本上就是跟著影片裡的人一起操作 \n 裡面也有解說基本的快捷鍵以及限制條件的方法 \n 下連結為操作影片: https://youtu.be/ZvZRASkGty8 \n', 'tags': '', 'url': 'Week2~5.html'}, {'title': 'Week6~9', 'text': '架設blog \n \n 下連結為建立BLOG的範例影片 https://youtu.be/L9YAYsLsORM \n \n \n V-rep無人車控制 \n 1.載 \xa0 V-rep 3.6.1 rev 4.7z \xa0及 web_vrep2.zip \xa0( local )並解壓縮到隨身碟 \n 2.開 web_vrep2 裡的 app.py 並執行，進入到 http://127.0.0.1:5000/ \n 3.vrep.exe並開啟web_vrep2裡的two_wheeler.ttt車子檔案 \n 4.開始之後，就可以利用運用控制器的前後左右測試是否可以控制車子 \n \n solvespace編譯-從HELP中ABOUT的學號 \n 1.開啟solvespace.cpp找到952行加上compiled by 自己的學號 \n 2.刪除舊的這個路徑中的solvespace.cpp.obj檔 \n 3.進入solvespace資料夾中的這個資料夾用指令cd build \n 4.打指令 cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release及 mingw32-make \n 5.開啟solvespace， 在help中的about是否有compiled 自己學號 \n \n webot啟動檔設定 \n 1. 先將START的啟動檔複製起來，再到自己201906_FALL下把下載好的WEBOT點選進去 貼上剛剛的啟動檔 \n 2. 再把啟動檔，拖到UNITLED內 \n 3.再來是 增加路徑及改下面一條，最後面增加 %path_webots%; \n 4. 再去啟動start \n 5. 開啟完成 \n \n 以ssh對github連線: \n 1.到y槽的portablegit將sh_for_solvespace檔案複製並修改成sh.exe \n 2.進入黑窗輸入sh和 ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 3.下載putty連線工具箱並利用其中的putty.gen創建兩把金鑰 \n 4.修改啟動器中的指令 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe 5. 進入config中更改指令 url = git@github.com:mdecourse/cad2019.git 在mdecourse的地方要改成自己的學號 \n 6.開啟putty.exe進去設定github.com和proxy位置其中ssh中的auth的地方必須選取剛剛創建的金鑰 \n 7.用編輯器複製課程網站中的step6指令並且儲存放入.ssh資料夾之中 \n 8.進入github並且在setting中的ssh將金鑰開啟並複製放入金鑰設置處', 'tags': '', 'url': 'Week6~9.html'}, {'title': 'Week10~14', 'text': '第10週:Fork倉儲 \n 1.登入自己的github，並且搜尋自己小組的分組倉儲 \n 2.點選右上角的fork，再點選自己的倉儲 \n 3.輸入指令 git clone --recurse-submodules (小組的倉儲網址) \n 4.等待下載完成即可 \n 下連結為操作影片:https://youtu.be/kULMk6BK79Q \n \n 第11週: 組員個別整理電子書內容 \n 此為NX12參考連結: http://mde.tw/cad2019/downloads/NX-12-for-Engineering-Design.pdf \n 第三章:二維草圖 \n 本章為教學如何在NX12中新建和編輯草圖， 我們可以在建模型的應用功能新建草圖平面， 通常建立模型都是從2D草圖開始的然後再用伸長、旋轉或掃出來建立實體，有複雜的形狀導致難以簡單的拉伸， 後面會有一些範例來示範如何運用草圖來長出工件。 \n 3.1概念 一個nx12的草圖是將曲線編入後掃出，形成一個固體， 我們可以使用應用約束和幾何約束以完全約束草圖，繪製完成後，可以使用多種方法來生成3D零件 \n • 使用旋轉來長出 \n   \n • 使用伸長來長出 \n \n • 使用掃出來長出 \n \n 從草圖創建的特徵和尺寸， 如果草圖更改，特徵也會更改。 以下是使用草圖創建的優點: \n •用於創建輪廓的曲線是非常靈活的，可用於建模\n不尋常的形狀。\n•曲線是參數化的，因此具有關聯性，可以輕鬆更改或刪除它們。\n•如果更改了繪製草圖的平面，則草圖將被更改。\n•當你想要控制特徵的輪廓時，只要進入草圖裡面做更改後， 其特徵皂性也能立即做出更改。 \n 3.2草圖環境 \n 在NX 12中，可以使用兩種方法創建草圖。 第一種方法是在當前環境 \n 以下做示範:➢ 選擇目錄→插入→草圖 \n \n 也可以使用另一種方法 \n ➢在主工具欄中選擇草圖 \n 無論哪種方式來建立，都會彈出一個視窗來詢問\n定義草圖平面。畫面會顯示草圖選項。可以選擇草圖平面， 草圖繪製方向和類型草圖的平面。 使用“創建草圖”視窗創建草圖時，可以選擇\n通過點擊所示的坐標系可以在其上創建草圖的平面。 這個將突出顯示你選擇的平面。 例子: \n ➢選擇XC-YC平面並點擊確定 \n 將顯示草圖平面，並標記X-Y方向。 \n 主畫面將更改為"草繪環境"。 XY平面突出顯示為用於草繪的默認平面。 這是基本的草圖窗口。還有一個特殊的草繪任務用在\nNX 12中的環境，它在主窗口中顯示所有草圖工具。 用於草繪任務的環境。 \n ➢直接點擊草圖工具欄區域中的更多選項 \n ➢在草圖環境中點擊打開，如下圖所示: \n 在Continuous Auto Dimensioning旁邊有三個選項，第一個是改變框中的草圖名稱。 下一個是定義草繪從而將視圖定向到草圖平面。 如果模型文件是在草繪過程中旋轉，請點擊此圖標以查看在平行於屏幕的平面上繪製草圖 重新附著將草圖附加到另一個平面上，基準平面或路徑，或更改草圖方向。 它允許您將草圖重新附加到所需的平面，而無需重新創建所有曲線，尺寸和約束。 \n 3.3草圖曲線工具欄 \n 該工具欄包含用於創建常用類型的圖標曲線、編輯、伸展 、 修剪 \n 、 圓角等。每種類型的曲線都有不同的方法選擇和創建方法。 讓我們討論最多常用選項。 \n \n \xa0 \n 輪廓 \n \n 此選項會根據您在彈出工具欄中選擇的圖標創建直線和圓弧。您可以使用坐標系或輸入長度和\n線的角度如下圖所示。 \n \n \n \n 線 \n 此功能可以在草圖上畫出直線。 \n 弧 \n 此功能可以用兩種方法來建立曲線 第一種:用任意三點來繪製曲線 第二種:圓心起點/終點畫弧先選取曲線的圓心位置，再分別點選曲線的起點和終點來匯出曲線 如下圖所示: \n \n 圓 \n 創建圓類似於創建圓弧，不同之處在於，圓是封閉的。 \n 快速修剪 \n 這將從曲線的交點修剪延伸的曲線。該選項顯示為如果每個實體與另一個實體相交， 則將它們拆分，並刪除 已選擇 該部分。 \n \xa0 \n Studio Spline \n 可以使用點或通過點創建基本樣條曲線。\n所需的曲線度。樣條線將在第七章中詳細討論（自由格式特徵）。 3.4約束工具欄 \n \xa0 \n 所有曲線都是通過拾取點創建的。例如，一條直線有兩個點。\n在2D環境中，任何點都有兩個自由度，一個沿X，另一個沿Y\n軸。點的數量取決於要創建的曲線的類型。因此，曲線實體\n自由度是其自己本身兩倍。 這些程度可以通過創建具有固定實體的約束來消除自由度。 實際上，建議通過刪除以下所有自由度（使草圖完全受約束）\n實體直接或間接地歸屬於固定實體。 可以通過賦予尺寸或幾何特性，如平行度，垂直度等。 \n 在NX 12中，智能約束是自動應用的，即自動尺寸或幾何\n約束由NX 12解釋。您可以通過單擊“連續自動”來關閉此選項。\n尺寸如下圖所示。以下段落顯示瞭如何手動應用約束。 \n \xa0 \n 尺寸約束 \n 通過給尺寸賦予固定實體（例如軸）的尺寸，可以消除自由度，\n平面，坐標系或模型中創建的任何現有實體幾何。 這些尺寸可以是線性，徑向，角度等。 可以隨時編輯尺寸值在草圖繪製過程中，雙擊尺寸。 \n 幾何約束 \n 除了尺寸約束外，還可以給出一些幾何約束來消除自由程度。 它們包括平行，垂直，共線，同心，水平，垂直，等長等。 該軟件具有查找以下可能約束的能力所選實體。 例如，將約束應用到下圖中的行上平行於矩形的左側（該線最初與矩形成一定角度）。 \n \xa0 \n \n 顯示草圖約束 \n \n 單擊此圖標將顯示與該特定草圖中的實體相關的所有選項。\xa0 \n \n 顯示/刪除約束 \n \n 該窗口列出了與所選任何實體相關的所有約束和約束類型。\n可以刪除任何列出的約束或更改約束的順序。\n狀態行中顯示不受約束的自由度。 所有應通過遵循約束模型的方式來應用約束和消除這些約束。 \n \n \n 3.5範例 3.5-1 \n ➢ 繪製以下草圖 \n ➢在Z方向上將該草圖拉伸60 mm \n 3.5-2 ➢按照如下所示應用尺寸約束 \n \n 選擇所有尺寸。 \n 右鍵單擊並隱藏尺寸 \n 選擇菜單→編輯→移動對像或選擇 從功能區欄中移動曲線 \n 選擇所有曲線。您應該看到有四個物體 在選擇對像中選擇 \n 指定運動為距離 \n 在指定向量中選擇YC方向 \n 輸入距離為0.5英寸 \n 在結果對話框中，確保單擊 複製原始單選按鈕 \n 點擊確定 \n 然後使用 基本曲線以完成草圖 \n \n \n \xa0 \n \n 草圖已準備好後: \n \n 選擇編輯→移動對像或從功能區欄中選擇移動曲線 \n 選擇外部曲線。確保選擇曲線的所有四個部分 \n 在Y方向上將下部曲線移動-1.5英寸。 這一樣在YC負方向上1.5英寸 \n \n 這將在套管外部形成曲線。 \n ➢使用直線將此曲線與套管的內部曲線連接如圖所示，它將形成一條閉合鏈曲線。 \n 現在，將在較小的一側創建套管外部所需的曲線，這將形成凸緣部分。 \n \n 選擇編輯→移動對象 \n 選擇外線，如下圖所示 \n \n \n \n 在XC方向上將下部曲線移動-0.5英寸。 這一樣在XC負方向上0.5英寸 \n 使用直線將兩條線連接起來，如右圖所示 \n 單擊完成標誌 \n 保存並關閉文件 \n \n 3.6 練習 \n 3.6.1 圓形底座 \n \n 3.6.2固定器的草圖 \n \n \xa0 \n \xa0 \n \n \xa0 \n \xa0 \n', 'tags': '', 'url': 'Week10~14.html'}, {'title': 'Week15~18', 'text': "W17任務 \n 以下為W17的任務內容以及翻譯原文書 \n 拍攝的影片: \n Model definition \n \xa0 \xa0 \xa0 \xa0 Now we are ready to define our model. We start by building the model herarchy: we attach the last dynamic robot link ( robot_link_dyn6 ) to its corresponding joint ( robot_joint6 ) by selecting \xa0 robot_link_dyn6 , then control-selecting \xa0 robot_joint6 , then [Menu bar --> Edit --> Make last selected object parent]. We could also have done this step by simply dragging object \xa0 robot_link_dyn6 \xa0 onto \xa0 robot_link6 \xa0 in the \xa0 scene hierarchy . We go on by now attaching \xa0 robot_joint6 \xa0 to \xa0 robot_link_dyn5 , and so on, until arrived at the base of the robot. We now have following scene hierarchy: \n 模型定義 \n \xa0 \xa0 \xa0 \xa0 \xa0 現在我們準備定義模型了。 我們從建立模型層次結構開始：通過選擇robot_link_dyn6，然後控制選擇robot_joint6，然後選擇[菜單欄->編輯->創建最後一個選定的對象，將最後一個動態機器人鏈接（robot_link_dyn6）附加到其相應的關節（robot_joint6） ]。 我們還可以通過簡單地將對象robot_link_dyn6拖到場景層次結構中的robot_link6上來完成此步驟。 現在，我們將robot_joint6附加到robot_link_dyn5上，依此類推，直到到達機器人的底部。 現在，我們具有以下場景層次結構： \n 圖片: \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n \n It is nice and more logical to have a simple name for the model base, since the model base will also represent the model itself. So we rename robot to robot_visibleBase, and robot_dyn to robot. Now we select the base of the hierarchy tree (i.e. object robot) and in the object common properties we enable Object is model base. We also enable Object/model can transfer or accept DNA. A model bounding box appeared, encompassing the whole robot. The bounding box however appears to be too large: this is because the bounding box also encompasses the invisible items, such as the joints. We now exclude the joints from the model bounding box by enabling the Don't show as inside model selection item for all joints. We could do the same procedure for all invisible items in our model. This is also a useful option in order to also exclude large sensors or other items from the model bounding box. We now have following situation: \n 為模型庫起一個簡單的名字盡量用合乎邏輯的命名，因為模型庫也將代表模型本身。 因此，我們將robot重命名為robot_visibleBase，並將robot_dyn重命名為robot。 現在我們選擇層次結構樹的基礎（即為對象機器人），並在對象公共屬性中啟用``對像是模型基礎''。 我們使對象/模型可以轉移或接受DNA。 出現了一個模型盒，包圍了整個機器人， 但是邊界框似乎太大，這是因為邊界框還包含不可見的項，例如:關節。 現在通過對所有關節啟用“不顯示為內部模型”選擇項，將關節從模型邊界框中排除。 我們可以對模型中的所有不可見項執行相同的過程。 這也是一個方法可以將大型傳感器或其他項目也排除在模型邊界框之外。 我們現在有以下情況： \n 圖片: \n \n We now protect our model from accidental modification. We select all visible objects in the robot, then enable Select base of model instead: if we now click a visible link in the scene, the base of the robot will be selected instead. This allows us to manipulate the model as if it was a single object. We can still select visible objects in the robot via control-shift-clicking in the scene, or by selecting the object in the scene hierarchy. We now put the robot into a correct default position/orientation. First, we save current scene as a reference (e.g. if at a later stage we need to import CAD data that have the same orientation at the curent robot). Then we select the model and modify its position/orientation appropriately. It is considered good practice to position the model (i.e. its base object) at X=0 and Y=0. \n 現在我們保護模型免受意外修改，我們選擇機器人中的所有可見對象，然後啟用“選擇模型的基礎”：如果現在點擊場景中的可見鏈接，則會改為選擇機器人的基礎。 這讓我們可以像對待單個對像一樣操作模型。 我們仍然可以通過按住Shift鍵並點擊場景或在場景層次中選擇對象來選擇機器人中的可見對象。 現在，我們將機器人置於正確的默認位置/方向。 首先，我們將當前場景保存為參考（例如，如果稍後需要在當前機器人上導入方向相同的CAD數據）。 然後，我們選擇模型並適當修改其位置/方向。 盡量將模型（即其基礎對象）定位在X = 0和Y = 0會比較好。 \n \n We now run the simulation: the robot will collapse, since the joints are not controlled by default.\xa0 When we added the joints in the previous stage , we created joints in force/torque mode, but their motor or controller was disabled (by default). We can now adjust our joints to our requirements. In our case, we want a simple PID controller for each one of them. In the joint dynamic properties, we click\xa0Motor enabled\xa0and adjust the\xa0maximum torque. We then click\xa0Control loop enabled\xa0and select\xa0Position control (PID). We now run the simulation again: the robot should hold its position. Try to switch the current physics engine to see if the behaviour is consistent across all supported physics engines. You can do this via the appropriate\xa0 toolbar button , or in the\xa0 general dynamics properties . \n 現在我們運行模擬：由於默認情況下關節不受控制，因此移動機器人將會崩潰。 在上一階段添加關節時，我們以力/扭矩模式創建了關節，但其電動機或控制器已禁用（默認情況下）。 現在我們可以根據需要調整關節， 在我們的案例中，我們希望為每個控制器都提供一個簡單的PID控制器。 在關節動態屬性中，點擊“啟用電機”並調整最大扭矩。 然後，點擊啟用控制環，然後選擇位置控制（PID）。 現在，我們再次運行模擬，機器人應保持其位置。 嘗試切換當前的物理引擎以查看行為在所有受支持的物理引擎之間是否一致。 您可以通過相應的工具欄按鈕或在常規動力學屬性中執行此操作。 \n During simulation, we now verify the scene dynamic content via the\xa0 Dynamic content visualization & verification toolbar button . Now, only items that are taken into account by the physics engine will be display, and the display is \xa0 color-coded . It is\xa0 very important \xa0to always do this, and specially when your dynamic model doesn't behave as expected, in order to quickly debug the model. Similarly, always look at the scene hierarchy during simulation: dynamically enabled objects should display a ball-bounding icon on the right-hand side of their name. \n 在模擬過程中，我們現在通過 工具欄選項 “動態內容可視化和驗證”的功能來驗證場景動態內容。 現在，將僅顯示物理引擎考慮的項目，並且該顯示使用顏色編碼。 始終執行此操作非常重要，尤其是在動態模型無法按預期運行時，為了快速調試模型，在模擬過程中請始終查看場景層次：動態啟用的對象應在其名稱的右側顯示一個球形圖標。 \n \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n Finally, we need to prepare the robot so that we can easily attach a gripper to it, or easily attach the robot to a mobile platform (for instance). Two dynamically enabled shapes can be rigidly attached to each other in two different ways: \n \n \n by grouping them : select the shapes, then [Menu bar --> Edit --> Grouping/Merging --> Group selected shapes]. \n by attaching them via a force/torque sensor : a \xa0 force torque sensor \xa0 can also act as a rigid link between two separate dynamically enabled shapes. \n \n \n In our case, only option 2 is of interest. We create a force/torque sensor with [Menu bar --> Add --> Force sensor], then move it to the tip of the robot, then attach it to object \xa0 robot_link_dyn6 . We change its size and visual appearance appropriately (a red force/torque sensor is often perceived as an optional attachment point, check the various robot models available). We also change its name to \xa0 robot_attachment : \n 最後，我們需要準備機器人，以便我們可以輕鬆地將抓取器連接到它，或輕鬆地將機器人連接到移動平台。 可以通過兩種不同的方式將兩個動態啟用的形狀準確的彼此附加： \n 通過對它們進行分組：選擇形狀，然後選擇[菜單欄->編輯->分組/合併->對選定形狀進行分組]。 通過力/扭矩傳感器進行連接：力扭矩傳感器還可以充當兩個單獨的動態啟用形狀之間的剛性鏈接。 在這個的情況下，只有選項2是有意義的。 我們使用[菜單欄->添加->力傳感器]創建一個力/扭矩傳感器，然後將其移動到機器人的尖端，然後將其附加到對象robot_link_dyn6。 我們在適當地更改其尺寸和外觀（紅色力/扭矩傳感器通常被視為可選的連接點，請檢查可用的各種機器人型號）。 我們將其名稱更改為robot_attachment: \n 圖片: \n \n Now we drag a gripper model into the scene, keep it selected, then control-click the attachment force sensor, then click the\xa0 Assembling/disassembling toolbar button . The gripper goes into place: \n 現在，我們將抓手模型拖到場景中，使其保持選中狀態，然後按住Control鍵並點擊附著力傳感器，然後點擊“裝配/拆卸”工具欄按鈕。 夾持器到位： \n 圖片: \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n \n The gripper knew how to attach itself because it was appropriately configured during its model definition. We now also need to properly configure the robot model, so that it will know how to attach itself to a mobile base for instance. We select the robot model, then click\xa0 Assembling \xa0 in the \xa0 object common properties . Set an empty string for \xa0 'Parent' match values , then click \xa0 Set matrix . This will memorize the current base object's local transformation matrix, and use it to position/orient itself relative to the mobile robot's attachment point. To verify that we did things right, we drag the model \xa0 Models/robots/mobile/KUKA Omnirob.ttm \xa0 into the scene. Then we select our robot model, then control-click one of the attachment points on the mobile platform, then click the \xa0 Assembling/disassembling toolbar button . Our robot should correctly place itself on top of the mobile robot: \n 夾具知道如何附加自身，因為它在模型定義期間進行了適當的配置。 現在我們還需要正確配置機器人模型，以便它知道如何將自己附加到移動基座上。 我們選擇機器人模型，然後在對象公共屬性中點擊“組裝”。 為“parent”匹配值設置一個空字符串，然後點擊“設置矩陣”。 這將記住當前基礎對象的局部轉換矩陣，並使用它相對於移動機器人的附著點定位/定向。 為了驗證我們做的正確，我們將模型Models / robots / mobile / KUKA Omnirob.ttm拖到場景中。 然後，我們選擇機器人模型，然後在移動平台上按住Control鍵並點擊其中一個附接點，然後點擊“組裝/拆卸”工具欄按鈕。 我們的機器人應該正確地將自己放置在移動機器人的頂部： \n 圖片: \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n \n Now we could add additional items to our robot, such as sensors for instance. At some point we might also want to attach\xa0 embedded scripts \xa0 to our model, in order to control its behaviour or configure it for various purposes. In that case, make sure to understand \xa0 how object handles are accessed from embedded scripts . We can also control/access/interface our model from a \xa0 plugin , from a \xa0 remote API \xa0 client, from a \xa0 ROS \xa0 node, from a \xa0 BlueZero \xa0 node, or from an \xa0 add-on . \n 現在，我們可以向機器人添加其他項目，例如傳感器。 在某些時候，我們可能還需要將嵌入式腳本附加到我們的模型中，以便控制其行為或出於各種目的對其進行配置。 在這種情況下，請確定了解如何從嵌入式腳本訪問對象。 我們還可以通過插件，遠程API客戶端，ROS節點，BlueZero節點或附加組件來控制/訪問/接口模型。 \n Now we make sure we have reverted the changes done during robot and gripper attachment, we collapse the hierarchy tree of our robot model, select the base of our model, then save it with [Menu bar --> File --> Save model as...]. If we saved it in the \xa0 model \xa0 folder, then the model will be available in the \xa0 model brower . \n 記得儲存在機械手和抓爪安裝過程中所做的更改，我們折疊了機械手模型的層次樹，選擇了模型的基礎，然後使用[菜單欄->文件->將模型另存為 ...]。 如果我們將其保存在模型文件夾中，則模型將在模型瀏覽器中可用。", 'tags': '', 'url': 'Week15~18.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}]};